const critical = require('critical');

critical.generate({
  inline: true,
  base: 'public/',
  src: 'pardot-form.html',
  target: {
    css: 'critical/pardot-form.critical.css',
  },
  width: 600,
  height: 1000,

  ignore: {
    atrule: ['@font-face'],
  },
});
