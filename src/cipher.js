const cipher = {
  encode(offset, texto) {
    let resultadoEncode = "";
    let letras = texto.length;
    for (let i = 0; i < letras; i++) {
      let codigoAsc = texto.charCodeAt(i);
      let codigoLetra = 65;
      if (codigoAsc >= 65 && codigoAsc <= 90) {
        let valorEncode =
          ((codigoAsc + codigoLetra + offset) % 26) + codigoLetra;
        resultadoEncode = resultadoEncode + String.fromCharCode(valorEncode); //retorna uma string criada ao usar uma sequência específica de valores Unicode
      } else {
        resultadoEncode = resultadoEncode + String.fromCharCode(codigoAsc);
      }
    }

    return resultadoEncode;
  },

  decode(offset, texto) {
    let resultadoDecode = "";
    let letras = texto.length;
    for (let i = 0; i < letras; i++) {
      let codigoAsc = texto.charCodeAt(i);
      let codigoLetra = 90;
      if (codigoAsc <= 90 && codigoAsc >= 65) {
        let valorDecode =
          ((codigoAsc - codigoLetra - offset) % 26) + codigoLetra;
        resultadoDecode = resultadoDecode + String.fromCharCode(valorDecode);
      } else {
        resultadoDecode = resultadoDecode + String.fromCharCode(codigoAsc);
      }
    }

    return resultadoDecode;
  },
};

export default cipher;
