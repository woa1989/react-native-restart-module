package com.restartmodule

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = RestartModuleModule.NAME)
class RestartModuleModule(reactContext: ReactApplicationContext) :
  NativeRestartModuleSpec(reactContext) {

  override fun getName(): String = NAME

  /**
   * 重启React Native应用
   * 使用软重启：清栈 + 重启主 Activity
   */
  @ReactMethod
  override fun restart() {
    softRestart()
  }

  /**
   * 软重启：清栈 + 重启主 Activity，不杀进程
   */
  private fun softRestart() {
    val app = reactApplicationContext.applicationContext
    val intent = app.packageManager.getLaunchIntentForPackage(app.packageName)?.apply {
      addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK)
    } ?: run {
      return
    }

    val activity = reactApplicationContext.currentActivity
    if (activity != null) {
      try {
        activity.startActivity(intent)
        activity.runOnUiThread {
          try { activity.finishAffinity() } catch (_: Exception) { activity.finish() }
        }
      } catch (e: Exception) {
        app.startActivity(intent)
      }
    } else {
      // 无当前 Activity 时，直接用 applicationContext 启动
      app.startActivity(intent)
    }
  }

  companion object {
    const val NAME = "RestartModule"
  }
}
