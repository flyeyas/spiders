window = global;
const JSEncrypt = require('jsencrypt')



const F_e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC29miF1Wp9XlhCECo+FYpCHad1ipEMgXf4IdgYjMIQwczzo9GXdcZ4eeV+9lkh6+aTqzzU843rdkMt0vrSnujU+GOuDPLfa5LZ6SfanAoysi6xxTX02Xizb3k+Z1USIzm9QAwE+SR1AQ78rGTRFHWFu7OGPkVNeF+vrX3inQTiawIDAQAB";

function V_e(e) {

    var jsencrypt = new JSEncrypt()
    jsencrypt['setPublicKey'](F_e);
    const o = 117
      , r = Math['ceil'](e['length'] / o);
    let s = [];
    for (let a = 0; a < r; a++) {
        const l = e['slice'](a * o, (a + 1) * o)
          , i = jsencrypt['encrypt'](l);
        s.push(i)
    }
    return s.join(",")
}