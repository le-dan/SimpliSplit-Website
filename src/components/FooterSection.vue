<script setup lang="ts">
import { IconGithubLoop } from "@iconify-prerendered/vue-line-md";
import { IconCopyrightThin } from "@iconify-prerendered/vue-ph";
</script>

<template>
        <div class="footer">
                <div class="fill"></div>
                <span class="copyright">
                        <IconCopyrightThin /> 2023 SimpliSplit | All Rights Reserved
                </span>



                <div class="link">

                        <a class="github" href="https://github.com/kmsungporant/HackXI">
                                <IconGithubLoop />
                        </a>
                        <router-link to="/privacy">
                                Privacy Policies
                        </router-link>

                </div>

        </div>
</template>

<style scoped lang="scss">
.footer {
        display: flex;
        justify-content: center;
        width: 100%;

        .fill {
                margin-left: auto;
                width: 70px;
        }

        .copyright {
                display: flex;
                align-items: center;
        }

        .link {
                display: flex;
                margin-left: auto;
                margin-right: 1rem;
                gap: 10px;
                align-items: center;

                .github {
                        display: flex;

                        color: #861f41;

                        svg {
                                height: 30px;
                                width: 30px;
                        }

                        transition: color 0.2s ease-in-out;

                        &:hover {
                                color: #c62f61;
                        }
                }

                .devpost {
                        display: flex;

                        color: #ef8a3d;

                        svg {
                                height: 30px;
                                width: 30px;
                        }

                        transition: color 0.2s ease-in-out;

                        &:hover {
                                color: #ffac6c;
                        }
                }
        }
}
</style>
