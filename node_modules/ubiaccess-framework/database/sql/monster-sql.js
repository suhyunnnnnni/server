

module.exports = {
    monster_list_all: {
        sql: `select id, name, img_path, type
                from test.monster`
    },

    monster_list: {
        sql: `select distinct m.id, m.name, m.img_path, m.type
            from test.userreward ur
            join test.monster m on ur.monster_id = m.id
            where ur.user_id = ?`,
        count: `select distinct count(*) as total
            from test.userreward ur
            join test.monster m on ur.monster_id = m.id
            where ur.user_id = ?`,
        where: `and #`,
        order: `order by #`,
        page: `limit #`
    },

    monster_read: {
        sql: `select id, name, img_path, type
                from test.monster
                where id= :id`
    },

    // 캐릭터 데이터 추가
    monster_add: {
        sql: `insert ignore into userreward (user_id, monster_id)
                values (:userId, :monsterId)`
    },
    // 캐릭터 데이터 수정
    monster_modify: {
        sql: `update test.monster
                set name = : name, img_path = :img_path, type = :type  where id = :id`
    },

    // 캐릭터 데이터 삭제
    monster_remove: {
        sql: `delete from test.monster
                where id = :id`
    }

}