#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"barcode",@"name",@"ti.barcode",@"moduleid",@"1.8.1",@"version",@"fe2e658e-0eaf-44a6-b6d1-c074d6b986a3",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
