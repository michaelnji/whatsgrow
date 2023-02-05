// @ts-nocheck

/* 
Checks if value exists, if yes returns it else 
stores value before returning it
*/
function getOrSetItem(key, value = '') {
  let db = localStorage;
  if (db.getItem(key) == null) {
    db.setItem(key, JSON.stringify(value));
  } else {
    return JSON.parse(db.getItem(key));
  }
  return value;
}

/* 
Checks if value exists, if yes returns it else 
returns null
*/
function getItemValue(key) {
  let db = localStorage;
  if (db.getItem(key) !== null) {
    return JSON.parse(db.getItem(key));
  } else return null;
}

/* 
Checks if key is not null , if yes 
stores value before returning it else returns null
*/
function setItemValue(key, value = '') {
  let db = localStorage;
  if (key !== null) {
    db.setItem(key, JSON.stringify(value));
    return value;
  } else return null;
}

// clears the localStorage database
function clearDB() {
  let db = localStorage;
  db.clear();
}

export default {
  getItemValue,
  getOrSetItem,
  setItemValue,
  clearDB
};
