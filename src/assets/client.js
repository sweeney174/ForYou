const OSS = require('ali-oss');
let client = new OSS({
  // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。
  region: 'oss-cn-shanghai',
  // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
  accessKeyId: sessionStorage.getItem('AccessKeyId'),
  stsToken: sessionStorage.getItem('SecurityToken'),
  accessKeySecret: sessionStorage.getItem('AccessKeySecret'),
  bucket: 'foryou-store'
});
export async function putBackground (file) {
  try {
    // let file = document.getElementById('upload_file_id').files[0];
    const data = file;
    console.log(file)
    // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let result = await client.put('templates/'+sessionStorage.getItem('id')+'/background/background.png', data);
    console.log(result);
    sessionStorage.setItem('background_link',result.url);
  } catch (e) {
    console.log(e);
  }
}

// export async function putGift (file) {
//   try {
//     // let file = document.getElementById('upload_file_id').files[0];
//     const data = file;
//     console.log(file)
//     // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
//     let result = await client.put('templates/'+sessionStorage.getItem('id')+'/gift/gitf.png', data);
//     console.log(result);
//     sessionStorage.setItem('gift_link',result.url)
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function putMusic (file) {
  try {
    // let file = document.getElementById('upload_file_id').files[0];
    const data = file;
    console.log(file)
    // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let result = await client.put('templates/'+sessionStorage.getItem('id')+'/musics/music.mp3', data);
    console.log(result);
    sessionStorage.setItem('music_link',result.url);
  } catch (e) {
    console.log(e);
  }
}
export async function putPicture (file) {
  try {
    // let file = document.getElementById('upload_file_id').files[0];
    const data = file;
    console.log(file)
    // object-key可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
    let sum=sessionStorage.getItem('photo_sum')
    sum++
    sessionStorage.setItem('photo_sum',sum)
    let result = await client.put('templates/'+sessionStorage.getItem('id')+'/photos/'+sessionStorage.getItem('photo_sum')+'.jpg', data);


    console.log(result);
    
  } catch (e) {
    console.log(e);
  }
}