<template>
    <header id="m_header" class="m-grid__item m-header " m-minimize="minimize" m-minimize-mobile="minimize" m-minimize-offset="10" m-minimize-mobile-offset="10">
        <div class="m-header__top">
            <div class="m-container m-container--fluid m-container--full-height m-page__container">
                <div class="m-stack m-stack--ver m-stack--desktop">

                    <!-- begin::Brand -->
                    <brand></brand>

                    <!-- end::Brand -->

                    <!-- begin::Topbar -->
                    <topBar></topBar>

                    <!-- end::Topbar -->
                </div>
            </div>
        </div>
        <div class="m-header__bottom">
            <div class="m-container m-container--fluid m-container--full-height m-page__container">
                <div class="m-stack m-stack--ver m-stack--desktop">

                    <!-- begin::Horizontal Menu -->
                   <HMenu></HMenu>

                    <!-- end::Horizontal Menu -->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>