USE join_us;

-- 1. Date Earliest User Joined
SELECT DATE_FORMAT(MIN(created_at),'%M %D %Y') AS earliest_date
FROM users;

-- OR
-- SELECT DATE_FORMAT(created_at,'%M %D %Y') AS earliest_date
-- FROM users
-- ORDER BY earliest_date ASC
-- LIMIT 1;

-- 2. Email of Earliest User
SELECT *
FROM users
WHERE created_at = (SELECT MIN(created_at) 
					FROM users);

-- OR
-- SELECT *
-- FROM users
-- ORDER BY created_at
-- LIMIT 1;

-- 3. Users Joined per Month
SELECT MONTHNAME(created_at) AS month, COUNT(email) AS count
FROM users
GROUP BY month
ORDER BY count DESC;

-- 4. Number of Yahoo Users
SELECT COUNT(email) AS yahoo_users
FROM users
WHERE LOWER(email) LIKE '%@yahoo.com';

-- 5. Total Number of Users for Each Email Host
SELECT
	CASE
		WHEN email LIKE '%@gmail.com' THEN 'gmail'
		WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(email) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;

-- OR
-- SELECT COUNT(*) FROM users WHERE email NOT LIKE '%@%';
-- SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(email,"@",-1),".",1) AS provider, COUNT(email) AS total_users
-- FROM users
-- GROUP BY provider
-- ORDER BY total_users DESC;
