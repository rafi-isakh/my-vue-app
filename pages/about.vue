<template>
  <div class="m-auto">
    <div class="content">
      <h2 class="title">{{ $t('message') }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      fr: '/qui-sommes-now',
      en: '/about-us',
      es: '/sobre-nosotros'
    }
  },
}
</script>
