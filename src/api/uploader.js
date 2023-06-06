// 클라우디너리에 제품 이미지 파일을 업로드 하는 로직
export async function uploadImage (file) {
  const data = new FormData();
  // data에 전달 받은 file을 file이라는 이름으로 넣고
  data.append("file", file);
  // 클라우디에너리에 나와 있는 데로 preset key를 넣어 줘야 하는데 이건 secret key이므로 env파일에 넣어 준다.
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  // 클라우디너리에서 제공해 주는 url에 파일을 가져 온다.
  return fetch(process.env.REACT_APP_CLOUDINARY_URL ,{
    method: 'post',
    body: data
  })
    .then(res => res.json())
    .then(data => data.url)
}