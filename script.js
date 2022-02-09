

// curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=1110246376495710 \
//   -F client_secret=d8953aa188e8663599eae908a5f87099 \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://desafree.github.io/prova-api-instagram/ \
//   -F code=AQAJmTvj7nyrL3J2gltVD85ZfBuGL_ZSSR7KT_Y01JwPJLel_1jmFMlnmob8UQCCrcWCtP0GaYAXzkcMolGEOVqlpssfofIEA28C3GrVK4vTAZgcWxvF6fWmQ4dQFy8Hv19bjL6bxJGlmSnfWRs7Fp5CD4raRD6tEjtJGy4Ji-atBEyq9Kz6xGhIdM9-dnSn-5Ox6409SpM0uE_asq0z5u0WPYMlwVC91JKQz_hqq0RxRw


  fetch('https://test.com/form/371489/data', {
    method: 'POST',
    headers: {
        'client_id': '1110246376495710',
        'client_secret' : 'd8953aa188e8663599eae908a5f87099',
        'grant_type': 'authorization_code',
        'redirect_uri': 'https://desafree.github.io/prova-api-instagram/',
        'code': 'AQAJmTvj7nyrL3J2gltVD85ZfBuGL_ZSSR7KT_Y01JwPJLel_1jmFMlnmob8UQCCrcWCtP0GaYAXzkcMolGEOVqlpssfofIEA28C3GrVK4vTAZgcWxvF6fWmQ4dQFy8Hv19bjL6bxJGlmSnfWRs7Fp5CD4raRD6tEjtJGy4Ji-atBEyq9Kz6xGhIdM9-dnSn-5Ox6409SpM0uE_asq0z5u0WPYMlwVC91JKQz_hqq0RxRw',
    }
    }).then((returned)=>{
        console.log(returned)
    })