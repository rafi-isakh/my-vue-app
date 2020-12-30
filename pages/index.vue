<template>
  <div class="m-auto">
    <div class="content">
      <div>
        <img src="https://www.iconarchive.com/show/google-play-icons-by-marcus-roberto/Google-Chrome-icon.html" alt="cover">
        <div>Test content</div>
      </div>
      <div>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa0%2FFirefox_logo%252C_2019.svg%2F1200px-Firefox_logo%252C_2019.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFirefox&tbnid=Hz4ZYpq6-75mWM&vet=12ahUKEwjAy_TS6tLtAhUV_TgGHdDYAb8QMygAegUIARDQAQ..i&docid=FYYTn0qPa5QmAM&w=1200&h=1131&q=firefox&hl=en&safe=strict&ved=2ahUKEwjAy_TS6tLtAhUV_TgGHdDYAb8QMygAegUIARDQAQ" alt="cover">
        <div>Test content</div>
      </div>
      <div>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F52%2FSafari_browser_logo.svg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSafari_(web_browser)&tbnid=9GT57xl31wrC9M&vet=12ahUKEwipyubZ6tLtAhWYgGMGHXJ6ACgQMygAegUIARDVAQ..i&docid=ppHo3PTdEjipqM&w=250&h=249&q=safari&hl=en&safe=strict&ved=2ahUKEwipyubZ6tLtAhWYgGMGHXJ6ACgQMygAegUIARDVAQ" alt="cover">
        <div>Test content</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
