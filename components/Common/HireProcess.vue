<template>
    <div class="hire__process">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3>How to Hire Bitsware</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 g-4">
                    <div class="hire__process--block h-100">
                        <div class="hire__process--top d-flex align-center justify-content-between">
                            <div>
                                <img src="~/assets/svg/requirement.svg" class="img-fluid" alt="Requirement">
                            </div>
                            <div>
                                <h4>Step 01</h4>
                            </div>
                        </div>
                        <div class="hire__process--bottom">
                            <h5>Requirement</h5>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 g-4">
                    <div class="hire__process--block h-100">
                        <div class="hire__process--top d-flex align-center justify-content-between">
                            <div>
                                <img src="~/assets/svg/client-call.svg" class="img-fluid" alt="Client Call">
                            </div>
                            <div>
                                <h4>Step 02</h4>
                            </div>
                        </div>
                        <div class="hire__process--bottom">
                            <h5>Client call</h5>
                        </div>                        
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 g-4">
                    <div class="hire__process--block h-100">
                        <div class="hire__process--top d-flex align-center justify-content-between">
                            <div>
                                <img src="~/assets/svg/introduce.svg" class="img-fluid" alt="Introduce">
                            </div>
                            <div>
                                <h4>Step 03</h4>
                            </div>
                        </div>
                        <div class="hire__process--bottom">
                            <h5>Introduce with developer</h5>
                        </div>                        
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 g-4">
                    <div class="hire__process--block h-100">
                        <div class="hire__process--top d-flex align-center justify-content-between">
                            <div>
                                <img src="~/assets/svg/contract.svg" class="img-fluid" alt="Contract">
                            </div>
                            <div>
                                <h4>Step 04</h4>
                            </div>
                        </div>
                        <div class="hire__process--bottom">
                            <h5>Sign contract</h5>
                        </div>                        
                    </div>
                </div>                                                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HireProcess'
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/style.scss';

.hire__process {
    background: linear-gradient(96deg, #E8FCF8 0%, #FAF0E6 100%);
    @include padding(150px,0px,150px,0px);
    margin-bottom: 120px;
    h3 {
        @include font($base-font,$heading-2,$font-weight-3,55px);
        margin-bottom: 60px;
    }
    &--block {
        @include padding(30px,30px,30px,30px);
        background: $white-100;
        box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
        border-radius: 8px;
    }
    &--top {
        margin-bottom: 30px;
        h4 {
            @include font($base-font,18px,$font-weight-2,24.48px);
            color: #5A5A67;
            margin-bottom: 0;
        }
    } 
    &--bottom {
        margin-top: 30px;
        h5 {
            @include font($base-font,20px,$font-weight-2,28px);
            color: $black-1000;
            margin-bottom: 0;
        }
    }   
}

</style>