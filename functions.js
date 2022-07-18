function hashPassword(obj) {
    var passwordObj = document.getElementById('senha');
    var hashObj = new jsSHA("SHA-512", "TEXT", {numRounds: 1});
    hashObj.update(passwordObj.value);
    var hash = hashObj.getHash("HEX");
    return hash;
  }

  