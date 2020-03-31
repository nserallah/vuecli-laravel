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
						<ul class="list-unstyled list-menu">
							<li>
								<router-link to="/" exact>DataTable</router-link>
							</li>
							<li>

								<router-link to="/pickers" exact>Datepicker</router-link>
								
							</li>
							<li>
								<router-link to="/calendar" exact>Date Calender</router-link>
							</li>
							<li>
								<router-link to="/tree" exact>three</router-link>
							</li>
						</ul>
						<h3>{{$t('body')}}</h3>
						<router-view></router-view>
						<!-- <data-table></data-table> -->
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
.m-grid.m-grid--ver-desktop.m-grid--desktop>.m-grid__item.m-grid__item--fluid, .m-grid.m-grid--ver-desktop.m-grid--desktop>.m-grid__item.m-grid__item--fluid-desktop{
	padding-bottom: 350px
}

.m-content .list-menu li{
	display: inline-block;
}

.m-content .list-menu li a {
	background: #2c3e50;
	color: #fff;
	padding: 10px 20px;
	border-radius: 10px;
}

.m-content .list-menu li a:hover{text-decoration: none;}

.m-content .list-menu li a.router-link-exact-active{
	background: #6167E0;
}

</style>