-- 单独的选择特定的列 不同的列名称要用,隔开
-- select username,passward from my_data_01.users;

-- 插入值语法：INSERT INTO tablename(列1，列2....) VALUES(值1，值2....)
-- INSERT INTO my_data_01.users(username,passward) VALUE('marry','908789');

-- select * from users 可以快速的选择所有的列
-- SELECT * FROM my_data_01.users;

-- 修改表中的值：UPDATE 表名称 SET 列名称=新值 WHERE 列名称=某值,假如更改多个值就用,隔开
-- UPDATE my_data_01.users SET username='熊大' WHERE id=2;
-- UPDATE my_data_01.users SET username='熊大',passward='8888888',status='1' WHERE id=2;

-- 删除表中的行：UPDATE 表名称 WHERE 列名称=值alter
-- DELETE FROM my_data_01.users WHERE id=4;

-- where子句的使用 可以用的操作符有 < ，> ,!= ,>=,<=,=
-- select username,passward from my_data_01.users where id!=2;

-- AND 与OR 可以在where后面使用 将多个条件结合起来
-- select username,passward from my_data_01.users where id=2 OR passward=1234567;

-- 排序默认升序 值后面加上desc就是降序排序 加上asc为升序排序
-- select *from my_data_01.users order by 排序依据
-- select *from my_data_01.users order by status desc ;

-- 多重排序 先按照status降序排序 再对名字首字母进行升序排序
-- select *from my_data_01.users order by passward asc,username asc;

-- 统计符合规定的值的数据条数：select count(*) from tablename where 限定条件;
-- select count(*) from my_data_01.users where id>=2;

-- 使用AS关键字为列区别名:select count(*) as 别名 from tablename where 限定条件;可以多次使用
-- select count(*) as mytotal from my_data_01.users where id>=2;
select username as uname,passward as pw from my_data_01.users;
select username,passward from my_data_01.users;



