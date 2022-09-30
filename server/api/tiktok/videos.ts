const videos = [
  { path: '/api/storage/videos/3qmXb95Y.mp4' },
  { path: '/api/storage/videos/7GBVnv3I.mp4' },
  { path: '/api/storage/videos/DvHe9DU5.mp4' },
  { path: '/api/storage/videos/m8YLaIKc.mp4' },
  { path: '/api/storage/videos/qKqlpDlF.mp4' },
  { path: '/api/storage/videos/Sy6xuwKT.mp4' },
  { path: '/api/storage/videos/XeuzV0fY.mp4' },
]

export default defineEventHandler((event) => {
  // const query = useQuery(event)

  const data = videos.map((v,i) => {
    return {
      id: i,
      ...v
    }
  }).sort((a, b) => 0.5 - Math.random());
  
  return data
})
