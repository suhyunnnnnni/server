

module.exports ={
    user_list_all: {
        sql: `select id, username, password
                from test.user`
    },

    user_list: {
        sql: `select id, username, password
                from test.user`,
        count: `select count(*) as total
                from test.user`,
        where: `where #`,
        oreder: `order by #`,
        page: `limit #`
    },

    user_read: {
        sql: `select id, username, password
                from test.user
                where id= :id`
    },

    // 고객 데이터 추가
    user_add: {
        sql: `insert into test.user(username, password)
                values
                (:username, :password)`
    },

    // 고객 데이터 수정
    user_modify: {
        sql: `update test.user
                set username = :username,
                    password = :password
                where id = :id`
    },

    // 고객 데이터 삭제
    user_remove: {
        sql: `delete from test.user
                where id = :id`
    }

}