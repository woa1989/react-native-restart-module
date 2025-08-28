#import <Foundation/Foundation.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <ReactCodegen/RestartModule/RestartModule.h>
#else
#import <React/RCTBridgeModule.h>
#endif

@interface RestartModule : NSObject
#ifdef RCT_NEW_ARCH_ENABLED
<NativeRestartModuleSpec>
#else
<RCTBridgeModule>
#endif

@end
