export const apiBaseUrl = 'http://127.0.0.1:3001/api/v1'

export const pageTake = 10

export const CLASS_TYPE = {
  FRONT: 1,
  AFTER: 2,
  MATH: 3,
  MUSIC: 4,
  ALGORITHM: 5,
  ENGLISH: 6,
  LINUX: 8,
  RESUME: 99
}

export const classMenu = [
  {
    name: '大前端',
    type: CLASS_TYPE.FRONT
  },
  {
    name: 'Node、后端',
    type: CLASS_TYPE.AFTER
  },
  {
    name: '数学',
    type: CLASS_TYPE.MATH
  },
  {
    name: '音乐',
    type: CLASS_TYPE.MUSIC
  },
  {
    name: '算法',
    type: CLASS_TYPE.ALGORITHM
  },
  {
    name: '英语',
    type: CLASS_TYPE.ENGLISH
  },
  {
    name: 'linux',
    type: CLASS_TYPE.LINUX
  },
  {
    name: 'resume',
    type: CLASS_TYPE.RESUME
  }
]

