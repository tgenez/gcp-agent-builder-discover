import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-conf/00-TITLE.md',
    '00-conf/01-speaker-genez-t.md',
    '00-conf/03-github.md'
  ];
}

function introSlides() {
  return [
    '01-intro/00-transition.md',
    '01-intro/01-agent-builder.md',
  ];
}

function noCodeSlides() {
  return [
    '02-no-code/00-transition.md',
    '02-no-code/01-chez-google.md',
  ];
}
function toolsSlides() {
  return [
    '03-tool/00-transition.md',
    '03-tool/01-ajout-rag.md',
    '03-tool/02-ajout-api.md',
  ];
}

function exampleSlides() {
  return [
    '04-example/00-transition.md',
    '04-example/01-ajout-example.md',
  ];
}
function demoSlides() {
  return [
    '05-demo/00-transition.md',
    '05-demo/01-demo.md'
  ];
}

function conclusion() {
  return [
    '06-conclusion/00-transition.md',
    '06-conclusion/01-feedback.md'
  ];
}


function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...noCodeSlides(),
    ...toolsSlides(),
    ...exampleSlides(),
    ...demoSlides(),
    ...conclusion()
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
