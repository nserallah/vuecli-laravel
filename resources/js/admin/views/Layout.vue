<template>
  <div>

		<loader></loader>

		<!-- begin:: Page -->
		<div class="m-grid m-grid--hor m-grid--root m-page">

			<!-- begin::Header -->

			<app-header></app-header>
			<!-- end::Header -->

			<!-- begin::Body -->
			<div class="m-grid__item m-grid__item--fluid  m-grid m-grid--ver-desktop m-grid--desktop m-page__container m-body">
				<div class="m-grid__item m-grid__item--fluid m-wrapper">

					<!-- BEGIN: Subheader -->
					
					<subheader></subheader>

					<!-- END: Subheader -->
					<div class="m-content">
						<h3>{{$t('body')}}</h3>
					</div>
				</div>
			</div>

			<!-- end::Body -->

			<!-- begin::Footer -->

			<appfooter></appfooter>

			<!-- end::Footer -->
		</div>

		<!-- end:: Page -->

		<!-- begin::Quick Sidebar -->
		
		<sideBar></sideBar>

		<!-- end::Quick Sidebar -->

		<!-- begin::Scroll Top -->
		
		<scrollTop></scrollTop>

		<!-- end::Scroll Top -->

		<!-- begin::Quick Nav -->
		<quickNav></quickNav>

		<!-- begin::Quick Nav -->


		</div>
</template>



<script>
export default {
	data: function() {
		return{
			
		}
	},
	
	
}
</script>

<style>

</style>