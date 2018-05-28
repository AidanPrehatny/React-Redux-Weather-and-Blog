module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "codeFrame": false
  },
  "rules":  {
      "react/jsx-filename-extension": [0],
      "import/no-named-as-default": 0,
      "linebreak-style": 0,
      "no-undef": "off",
      "no-console": "off",
      "react/prop-types": 0,
      "jsx-a11y/anchor-is-valid": [ "error", { "components": [ "Link" ], "specialLink": [ "onClick", "to" ] } ],
      "jsx-a11y/label-has-for": 0
    }
};
