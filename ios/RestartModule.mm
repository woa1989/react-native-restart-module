#import "RestartModule.h"
#import <React/RCTBridge.h>
#import <React/RCTReloadCommand.h>
#import <React/RCTUtils.h>

@implementation RestartModule

RCT_EXPORT_MODULE()


/**
 * 重启React Native应用
 * 在iOS上使用RCTReloadCommand重新加载React Native bundle
 */
- (void)restart {
    dispatch_async(dispatch_get_main_queue(), ^{
        // 使用RCTReloadCommand进行重启，这是推荐的方式
        RCTTriggerReloadCommandListeners(@"RestartModule重启");
    });
}


#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeRestartModuleSpecJSI>(params);
}
#endif

@end
