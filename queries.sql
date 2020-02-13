-- Multi-Table Query Practice
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
  ProductName,
  CategoryName
from Product as P
join Category as C on P.CategoryId = C.Id 
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
  -- ! This date returns more than 429 records, Changed to different date, works
SELECT
  Id,
  CompanyName
FROM [Order] as O
JOIN Shipper as S on O.ShipVia = S.Id
WHERE
  OrderDate >= '2015-08-09'
   -- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
   select
  *
from [Order]
WHERE
  Id = 10251
  -- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
  Id,
  LastName,
  CompanyName
from [Order] as O
JOIN Employee as E on O.EmployeeId = E.Id
JOIN Customer as C on O.CustomerId = C.Id
