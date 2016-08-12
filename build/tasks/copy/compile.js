var gulp, gulpTap, log, path;

path = require("path");

gulp = require("gulp");

gulpTap = require("gulp-tap");

log = require("../../lib/log");

module.exports = function(coffeeProjectOptions) {
  var enabled, excluded, options, sourceDirectoryPath, targetDirectoryPath;
  options = coffeeProjectOptions.copy;
  enabled = options.enabled;
  excluded = options.excluded;
  sourceDirectoryPath = options.sourceDirectoryPath;
  targetDirectoryPath = options.targetDirectoryPath;
  return gulp.task("copy:compile", function(cb) {
    var sourceGlob;
    if (enabled !== true) {
      log.info("Skipping copy:compile: Disabled.");
      return cb();
    }
    log.info("[copy:compile] Source directory path: `" + sourceDirectoryPath + "`.");
    log.info("[copy:compile] Target directory path: `" + targetDirectoryPath + "`.");
    excluded = (excluded || []).map(function(x) {
      return "!" + x;
    });
    sourceGlob = [sourceDirectoryPath + "/**/*"].concat(excluded);
    gulp.src(sourceGlob).pipe(gulpTap(function(file) {
      log.debug("[copy:compile] Copying `" + file.path + "`.");
    })).pipe(gulp.dest(targetDirectoryPath)).on("end", cb);
  });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzL2NvcHkvY29tcGlsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxJQUFBLEdBQVUsT0FBQSxDQUFRLE1BQVI7O0FBQ1YsSUFBQSxHQUFVLE9BQUEsQ0FBUSxNQUFSOztBQUNWLE9BQUEsR0FBVSxPQUFBLENBQVEsVUFBUjs7QUFFVixHQUFBLEdBQU0sT0FBQSxDQUFRLGVBQVI7O0FBRU4sTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxvQkFBRDtBQUNoQixNQUFBO0VBQUEsT0FBQSxHQUFzQixvQkFBb0IsQ0FBQztFQUMzQyxPQUFBLEdBQXNCLE9BQU8sQ0FBQztFQUM5QixRQUFBLEdBQXNCLE9BQU8sQ0FBQztFQUM5QixtQkFBQSxHQUFzQixPQUFPLENBQUM7RUFDOUIsbUJBQUEsR0FBc0IsT0FBTyxDQUFDO1NBRTlCLElBQUksQ0FBQyxJQUFMLENBQVUsY0FBVixFQUEwQixTQUFDLEVBQUQ7QUFDekIsUUFBQTtJQUFBLElBQU8sT0FBQSxLQUFXLElBQWxCO01BQ0MsR0FBRyxDQUFDLElBQUosQ0FBUyxrQ0FBVDtBQUNBLGFBQU8sRUFBQSxDQUFBLEVBRlI7O0lBSUEsR0FBRyxDQUFDLElBQUosQ0FBUyx5Q0FBQSxHQUEwQyxtQkFBMUMsR0FBOEQsSUFBdkU7SUFDQSxHQUFHLENBQUMsSUFBSixDQUFTLHlDQUFBLEdBQTBDLG1CQUExQyxHQUE4RCxJQUF2RTtJQUVBLFFBQUEsR0FBYSxDQUFDLFFBQUEsSUFBWSxFQUFiLENBQWdCLENBQUMsR0FBakIsQ0FBcUIsU0FBQyxDQUFEO2FBQU8sR0FBQSxHQUFJO0lBQVgsQ0FBckI7SUFDYixVQUFBLEdBQWEsQ0FBSyxtQkFBRCxHQUFxQixPQUF6QixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFFBQXpDO0lBRWIsSUFBSSxDQUFDLEdBQUwsQ0FBUyxVQUFULENBQ0MsQ0FBQyxJQURGLENBQ08sT0FBQSxDQUFRLFNBQUMsSUFBRDtNQUNiLEdBQUcsQ0FBQyxLQUFKLENBQVUsMEJBQUEsR0FBMkIsSUFBSSxDQUFDLElBQWhDLEdBQXFDLElBQS9DO0lBRGEsQ0FBUixDQURQLENBS0MsQ0FBQyxJQUxGLENBS08sSUFBSSxDQUFDLElBQUwsQ0FBVSxtQkFBVixDQUxQLENBTUMsQ0FBQyxFQU5GLENBTUssS0FOTCxFQU1ZLEVBTlo7RUFYeUIsQ0FBMUI7QUFQZ0IiLCJmaWxlIjoidGFza3MvY29weS9jb21waWxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsicGF0aCAgICA9IHJlcXVpcmUgXCJwYXRoXCJcbmd1bHAgICAgPSByZXF1aXJlIFwiZ3VscFwiXG5ndWxwVGFwID0gcmVxdWlyZSBcImd1bHAtdGFwXCJcblxubG9nID0gcmVxdWlyZSBcIi4uLy4uL2xpYi9sb2dcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IChjb2ZmZWVQcm9qZWN0T3B0aW9ucykgLT5cblx0b3B0aW9ucyAgICAgICAgICAgICA9IGNvZmZlZVByb2plY3RPcHRpb25zLmNvcHlcblx0ZW5hYmxlZCAgICAgICAgICAgICA9IG9wdGlvbnMuZW5hYmxlZFxuXHRleGNsdWRlZCAgICAgICAgICAgID0gb3B0aW9ucy5leGNsdWRlZFxuXHRzb3VyY2VEaXJlY3RvcnlQYXRoID0gb3B0aW9ucy5zb3VyY2VEaXJlY3RvcnlQYXRoXG5cdHRhcmdldERpcmVjdG9yeVBhdGggPSBvcHRpb25zLnRhcmdldERpcmVjdG9yeVBhdGhcblxuXHRndWxwLnRhc2sgXCJjb3B5OmNvbXBpbGVcIiwgKGNiKSAtPlxuXHRcdHVubGVzcyBlbmFibGVkIGlzIHRydWVcblx0XHRcdGxvZy5pbmZvIFwiU2tpcHBpbmcgY29weTpjb21waWxlOiBEaXNhYmxlZC5cIlxuXHRcdFx0cmV0dXJuIGNiKClcblxuXHRcdGxvZy5pbmZvIFwiW2NvcHk6Y29tcGlsZV0gU291cmNlIGRpcmVjdG9yeSBwYXRoOiBgI3tzb3VyY2VEaXJlY3RvcnlQYXRofWAuXCJcblx0XHRsb2cuaW5mbyBcIltjb3B5OmNvbXBpbGVdIFRhcmdldCBkaXJlY3RvcnkgcGF0aDogYCN7dGFyZ2V0RGlyZWN0b3J5UGF0aH1gLlwiXG5cblx0XHRleGNsdWRlZCAgID0gKGV4Y2x1ZGVkIG9yIFtdKS5tYXAgKHgpIC0+IFwiISN7eH1cIlxuXHRcdHNvdXJjZUdsb2IgPSBbIFwiI3tzb3VyY2VEaXJlY3RvcnlQYXRofS8qKi8qXCIgXS5jb25jYXQgZXhjbHVkZWRcblxuXHRcdGd1bHAuc3JjIHNvdXJjZUdsb2Jcblx0XHRcdC5waXBlIGd1bHBUYXAgKGZpbGUpIC0+XG5cdFx0XHRcdGxvZy5kZWJ1ZyBcIltjb3B5OmNvbXBpbGVdIENvcHlpbmcgYCN7ZmlsZS5wYXRofWAuXCJcblx0XHRcdFx0cmV0dXJuXG5cblx0XHRcdC5waXBlIGd1bHAuZGVzdCB0YXJnZXREaXJlY3RvcnlQYXRoXG5cdFx0XHQub24gXCJlbmRcIiwgY2JcblxuXHRcdHJldHVyblxuIl19
