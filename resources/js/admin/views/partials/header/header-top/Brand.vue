<template>
  <div class="m-stack__item m-brand m-stack__item--left">
        <div class="m-stack m-stack--ver m-stack--general m-stack--inline">
            <div class="m-stack__item m-stack__item--middle m-brand__logo">
                <a href="index.html" class="m-brand__logo-wrapper">
                    <img alt="" src="assets/demo/demo10/media/img/logo/logo.png" class="m-brand__logo-desktop" />
                    <img alt="" src="assets/demo/demo10/media/img/logo/logo_mini.png" class="m-brand__logo-mobile" />
                </a>
            </div>
            <div class="m-stack__item m-stack__item--middle m-brand__tools">

                <!-- begin::Quick Actions-->
                <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-left m-dropdown--align-push" m-dropdown-toggle="click" aria-expanded="true">
                    <a href="#" class="dropdown-toggle m-dropdown__toggle btn btn-outline-metal m-btn  m-btn--icon m-btn--pill">
                        <span>{{$t('dropdownTitle')}}</span>
                    </a>
                    <div class="m-dropdown__wrapper">
                        <span class="m-dropdown__arrow m-dropdown__arrow--left m-dropdown__arrow--adjust"></span>
                        <div class="m-dropdown__inner">
                            <div class="m-dropdown__body">
                                <div class="m-dropdown__content">
                                    <ul class="m-nav">
                                        <li class="m-nav__section m-nav__section--first m--hide">
                                            <span class="m-nav__section-text">Quick Menu</span>
                                        </li>
                                        <li class="m-nav__item">
                                            <a href="" class="m-nav__link">
                                                <i class="m-nav__link-icon flaticon-share"></i>
                                                <span class="m-nav__link-text">Human Resources</span>
                                            </a>
                                        </li>
                                        <li class="m-nav__item">
                                            <a href="" class="m-nav__link">
                                                <i class="m-nav__link-icon flaticon-chat-1"></i>
                                                <span class="m-nav__link-text">Customer Relationship</span>
                                            </a>
                                        </li>
                                        <li class="m-nav__item">
                                            <a href="" class="m-nav__link">
                                                <i class="m-nav__link-icon flaticon-info"></i>
                                                <span class="m-nav__link-text">Order Processing</span>
                                            </a>
                                        </li>
                                        <li class="m-nav__item">
                                            <a href="" class="m-nav__link">
                                                <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                                                <span class="m-nav__link-text">Accounting</span>
                                            </a>
                                        </li>
                                        <li class="m-nav__separator m-nav__separator--fit">
                                        </li>
                                        <li class="m-nav__item">
                                            <a href="" class="m-nav__link">
                                                <i class="m-nav__link-icon flaticon-chat-1"></i>
                                                <span class="m-nav__link-text">Customer Relationship</span>
                                            </a>
                                        </li>
                                        <li class="m-nav__item">
                                            <a href="" class="m-nav__link">
                                                <i class="m-nav__link-icon flaticon-info"></i>
                                                <span class="m-nav__link-text">Order Processing</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- end::Quick Actions-->

                <!-- begin::Responsive Header Menu Toggler-->
                <a id="m_aside_header_menu_mobile_toggle" href="javascript:;" class="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                    <span></span>
                </a>

                <!-- end::Responsive Header Menu Toggler-->

                <!-- begin::Topbar Toggler-->
                <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                    <i class="flaticon-more"></i>
                </a>

                <!--end::Topbar Toggler-->
            </div>
            <div id="lang" class="m-stack__item m-stack__item--middle lang-icons">

                 <div class="m-stack__item m-stack__item--middle m-brand__tools">

                <!-- begin::Language Dropmenu-->
                <div class="m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-left m-dropdown--align-push" m-dropdown-toggle="click" aria-expanded="true">
                    <a href="#" class="dropdown-toggle m-dropdown__toggle btn btn-outline-metal m-btn  m-btn--icon m-btn--pill">
                        <span>Language</span>
                    </a>
                    <div class="m-dropdown__wrapper">
                        <span class="m-dropdown__arrow m-dropdown__arrow--left m-dropdown__arrow--adjust"></span>
                        <div class="m-dropdown__inner">
                            <div class="m-dropdown__body">
                                <div class="m-dropdown__content">
                                    <ul class="m-nav">
                                        <li class="m-nav__section m-nav__section--first m--hide">
                                            <span class="m-nav__section-text">Quick Menu</span>
                                        </li>
                                        <li class="m-nav__item">
                                            <a class="lang-i m-nav__link" href="" @click.prevent="setLocale('en')">English</a> 
                                        </li>
                                        <li class="m-nav__item">
                                            <a class="lang-i m-nav__link" href="#" @click.prevent="setLocale('ar')">العربية</a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- end::Language menu-->

            </div>
  
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    methods: {
		setLocale(locale){
            this.$i18n.locale = locale;
           if(locale === "ar") {
               const langEl = document.getElementById('lang');
               const vendors = document.getElementById('rtl-vendors');
               const style = document.getElementById('rtl-demo');

                langEl.classList.add('rtl');
               vendors.setAttribute("href", "assets/vendors/base/vendors.bundle.rtl.css");
               style.setAttribute("href", "assets/demo/demo10/base/style.bundle.rtl.css");
               
           } else {
               const langEl = document.getElementById('lang');
               const vendors = document.getElementById('rtl-vendors');
               const style = document.getElementById('rtl-demo');

               langEl.classList.remove('rtl');
               vendors.setAttribute("href", "");
               style.setAttribute("href", "");
           }

		}
	}
}
</script>

<style>

.lang-icons{
    padding-left: 20px;
    
}

.lang-icons.rtl{
    padding-left: 0px;
    padding-right:20px;
    direction: rtl;
}
.lang-icons .lang-i{
    font-size: 16px;
    color: #000;
    padding: 13px 5px !important;

}

.lang-icons .lang-i:hover{
    background-color:#6167e0;
    color: #fff
}

.lang-icons .m-dropdown .m-dropdown__wrapper .m-dropdown__body{
    padding: 10px
}




.lang-icons .lang-i:hover{
    text-decoration: none;
    
}
</style>