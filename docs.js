/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var fs = require('fs');
var path = require('path');

function stringOfLength(string, length) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += string;
  }
  return newString;
}

function generateTitle(name) {
  const title = '`' + name + '` (component)';
  return title + '\n' + stringOfLength('=', title.length) + '\n';
}

function generateDesciption(description) {
  return description + '\n';
}

function generatePropType(type) {
  let values;
  if (Array.isArray(type.value)) {
    values =
      '(' +
      type.value
        .map(function(typeValue) {
          return typeValue.name || typeValue.value;
        })
        .join('|') +
      ')';
  } else {
    values = type.value;
  }

  return 'type: `' + type.name + (values ? values : '') + '`\n';
}

function generatePropDefaultValue(value) {
  return 'defaultValue: `' + value.value + '`\n';
}

function generateProp(propName, prop) {
  return (
    '### `' +
    propName +
    '`' +
    (prop.required ? ' (required)' : '') +
    '\n' +
    '\n' +
    (prop.description ? prop.description + '\n\n' : '') +
    (prop.type ? generatePropType(prop.type) : '') +
    (prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '') +
    '\n'
  );
}

function generateProps(props = {}) {
  const title = 'Props';
  return (
    title +
    '\n' +
    stringOfLength('-', title.length) +
    '\n' +
    '\n' +
    Object.keys(props)
      .sort()
      .map(function(propName) {
        return generateProp(propName, props[propName]);
      })
      .join('\n')
  );
}

function generateMarkdown(name, reactAPI) {
  const markdownString =
    generateTitle(name) +
    '\n' +
    generateDesciption(reactAPI.description) +
    '\n' +
    generateProps(reactAPI.props);

  return markdownString;
}

const json = require('./readme.json');

function buildDocs(api) {
  // api is an object keyed by filepath. We use the file name as component name.
  for (var filepath in api) {
    var name = getComponentName(filepath);
    var markdown = generateMarkdown(name, api[filepath]);
    fs.writeFileSync('./docs/' + name + '.md', markdown);
    process.stdout.write(filepath + ' -> ' + name + '.md\n');
  }
}

function getComponentName(filepath) {
  var name = path.basename(filepath);
  var ext;
  while ((ext = path.extname(name))) {
    name = name.substring(0, name.length - ext.length);
  }
  return name;
}

buildDocs(json);
