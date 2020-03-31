<!DOCTYPE html>

<html lang="en">

	<!-- begin::Head -->
	<head>
		<meta charset="utf-8" />
		<title>Metronic | Dashboard</title>
		<meta name="description" content="Latest updates and statistic charts">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">

		<!--begin::Web font -->
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
		<script>
			WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700","Asap+Condensed:500"]},
            active: function() {
                sessionStorage.fonts = true;
            }
          });
        </script>

		<!--end::Web font -->
		<!-- Start font awesome -->
		<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
		<!-- End font awesome -->

		<!--begin::Global Theme Styles -->
		<link href="{{asset('/assets/vendors/base/vendors.bundle.css')}}" rel="stylesheet" type="text/css" />
		<!--RTL version: -->
		<link id="rtl-vendors" href="" rel="stylesheet" type="text/css" />

		<link href="{{asset('/assets/demo/demo10/base/style.bundle.css')}}" rel="stylesheet" type="text/css" />
		<!--RTL version: -->
		 <link id="rtl-demo" href="" rel="stylesheet" type="text/css" />

		<!--end::Global Theme Styles -->

		</head>

	<!-- end::Head -->

	<!-- begin::Body -->
	<body class="m-page--fluid m-page--loading-enabled m-page--loading m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default">

		<div id="app">
			
		</div>

		<!--begin::Global Theme Bundle -->
		<script src="{{mix('js/main.js')}}"></script>

		<script src="{{asset('/assets/vendors/base/vendors.bundle.js')}}" type="text/javascript"></script>
		
		<script src="{{asset('/assets/demo/demo10/base/scripts.bundle.js')}}" type="text/javascript"></script>

		<script src="{{asset('/assets/snippets/custom/pages/user/login.js')}}" type="text/javascript"></script>
		<!--end::Global Theme Bundle -->

		<!--begin::Page Scripts -->
		<script src="{{asset('/assets/app/js/dashboard.js')}}" type="text/javascript"></script>
		<!--end::Page Scripts -->

		<!-- begin::Page Loader -->
		<script defer>
			$(window).on('load', function() {
				$('body').removeClass('m-page--loading');
			});
		</script>

		<!-- end::Page Loader -->
	</body>

	<!-- end::Body -->
</html>