'use strict';


angular.module('tequeFrontendApp').factory('Reports', function($resource, $http, ENV) {
	
	return {
		postReport: function(reportable_type, reportable_id, reason) {
			var report = $http.post(ENV.apiEndpoint + '/api/reports', 
			{
				report: {
					reportable_type: reportable_type,
					reportable_id: reportable_id,
					reason: reason
				}
			}
			)
			return report;
		},

		getReportOptions: function () {
			
			return $http.get(ENV.apiEndpoint + '/api/report_options')
		},

		reportBug: function (report) {
			return $http.post(ENV.apiEndpoint + '/api/bug_reports', 
			{
				bug_report: {
					body: report
				}
			})
		}
	} 
});