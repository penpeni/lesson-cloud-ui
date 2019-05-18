const TheAdmin = () => import('_views/the-admin')
const TheHome = () => import('_views/the-admin/the-home')
const TheSysLog = () => import('_views/the-admin/the-sys-log')
const TheSysUserRole = () => import('_views/the-admin/the-sys-user-role')
const TheSysRoleRes = () => import('_views/the-admin/the-sys-role-res')
const TheTeacher = () => import('_components/the-admin/the-teacher')
const TheCourse = () => import('_views/the-admin/the-course')
const TheJudgement = () => import('_components/the-admin/the-judgement')
const TheProgram = () => import('_views/the-admin/the-program')
const TheEssay = () => import('_views/the-admin/the-essay')
const TheExam = () => import('_components/the-admin/the-exam')
const ThePaper = () => import('_components/the-admin/the-paper')
const TheExamRule = () => import('_components/the-admin/the-exam-rule')
const TheSysUser = () => import('_components/the-admin/the-sys-user')
const TheExamHistories = () => import('_views/the-admin/the-exam-histories')
const TheSysRole = () => import('_views/the-admin/the-sys-role')
const TheSysDatas = () => import('_views/the-admin/the-sys-datas')

export default {
  path: '/admin',
  name: 'admin',
  component: TheAdmin,
  children: [
    {
      path: '',
      name: 'admin-home',
      component: TheHome,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: 'sysLog',
      name: 'admin-sysLog',
      component: TheSysLog,
      meta: {
        title: '日志管理'
      }
    },
    {
      path: 'sysUser',
      name: 'admin-sysUser',
      component: TheSysUser,
      meta: {
        title: '用户管理'
      }
    },
    {
      path: 'teacher',
      name: 'admin-teacher',
      component: TheTeacher,
      meta: {
        title: '教师管理'
      }
    },
    {
      path: 'course',
      name: 'admin-course',
      component: TheCourse,
      meta: {
        title: '课程管理'
      }
    },
    {
      path: 'essay',
      name: 'admin-essay',
      component: TheEssay,
      meta: {
        title: '问答题管理'
      }
    },
    {
      path: 'program',
      name: 'admin-program',
      component: TheProgram,
      meta: {
        title: '编程题管理'
      }
    },
    {
      path: 'judgement',
      name: 'admin-judgement',
      component: TheJudgement,
      meta: {
        title: '判断题管理'
      }
    },

    {
      path: 'exam',
      name: 'admin-exam',
      component: TheExam,
      meta: {
        title: '考试管理'
      }
    },
    {
      path: 'paper',
      name: 'admin-paper',
      component: ThePaper,
      meta: {
        title: '试卷管理'
      }
    },
    {
      path: 'examRule',
      name: 'admin-examRule',
      component: TheExamRule,
      meta: {
        title: '组卷规则管理'
      }
    },
    {
      path: 'examHistories',
      name: 'admin-examHistories',
      component: TheExamHistories,
      meta: {
        title: '组卷规则管理'
      }
    },
    {
      path: 'sysRole',
      name: 'admin-sysRole',
      component: TheSysRole,
      meta: {
        title: '系统角色管理'
      }
    },
    {
      path: '/sysRoleRes',
      name: 'sysRoleRes',
      component: TheSysRoleRes,
      meta: {
        title: '角色权限关联'
      }
    },
    {
      path: '/sysUserRole',
      name: 'sysUserRole',
      component: TheSysUserRole,
      meta: {
        title: '用户角色关联管理'
      }
    },
    {
      path: '/sysDatas',
      name: 'sysDatas',
      component: TheSysDatas,
      meta: {
        title: '系统基础信息表'
      }
    }
  ]
}
