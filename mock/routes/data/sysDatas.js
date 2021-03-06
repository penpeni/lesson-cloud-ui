const express = require('express')
const router = express.Router()

let sysData = []
let id = 1

// 创建十个问答题对象
for (let i = 0; i < 100; i++) {
  sysData.push({
    'name': '系统基本数据表1' + i,
    'spell': 'jiben1' + i,
    'sort': 1,
    'createTime': '2019-05-14T21:12:40',
    'createUser': 'admin',
    'modifyTime': '2019-05-14T21:12:40',
    'modifyUser': 'admin',
    'remark': '贵州民族大学',
    'isEnable': true,
    'parentId': 0,
    'brief': '贵州民族大学',
    'type': 0,
    '_links': {
      'self': {
        'href': 'http://127.0.0.1:8080/sysDatas/' + id
      },
      'sysData': {
        'href': 'http://127.0.0.1:8080/sysDatas/' + id
      }
    }
  })
  id++
}

/**
 * get请求
 */
router.get('/', (req, res) => {
  let page = req.query.page
  if (typeof (req.query.page) !== 'undefined') {
    if (page > 9) page = 9
    else if (page < 0) page = 0
  } else {
    page = 0
  }
  let start = 10 * page
  res.status(200)
    .json({
      '_embedded': {
        'sysData': sysData.slice(start, start + 10)
      },
      '_links': {
        'self': {
          'href': 'http://127.0.0.1:8080/sysDatas{?page,size,sort}',
          'templated': true
        },
        'profile': {
          'href': 'http://127.0.0.1:8080/profile/sysDatas'
        },
        'search': {
          'href': 'http://127.0.0.1:8080/sysDatas/search'
        }
      },
      'page': {
        'size': 10,
        'totalElements': 100,
        'totalPages': 10,
        'number': page
      }
    })
})

/**
 * delete请求
 */
router.delete('/:id', (req, res) => {
  res.sendStatus(204)
})

/**
 * post请求
 */
router.post('/', (req, res) => {
  req.body._links = {
    'self': {
      'href': 'http://127.0.0.1:8080/sysDatas/' + id
    },
    'sysData': {
      'href': 'http://127.0.0.1:8080/sysDatas/' + id
    }
  }
  id++
  sysData.unshift(req.body)
  res.status(201)
    .json(req.body)
})

/**
 * put请求
 */
router.put('/', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
