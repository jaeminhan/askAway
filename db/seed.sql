INSERT INTO users (id, username, password) VALUES
  (1, 'Wes', 1234 ),
  (2, 'Katherine', 2345),
  (3, 'Eric', 8430),
  (4, 'Lisa', 4321),
  (5, 'Jaemin', 0000);

INSERT INTO topics (id, title, content, user_id) VALUES
  (1, 'Learn about Four Seasons Hotel', 'Four Seasons Hotels Limited, trading as Four Seasons Hotels and Resorts, is an international luxury hospitality company headquartered in Toronto, Ontario.', 1),
  (2, 'Starwood and Marriott merger points', 'This is essentially an entirely new loyalty program, so there’s a lot of information to digest. But here’s a quick overview of the most important changes…', 2),
  (3, 'Hilton Book Direct Campaign', 'Stop Clicking Around.', 3),
  (4, 'Any Arlo Hotel Fans?', 'Arlo Hotels has two boutique hotels in downtown New York. Arlo SoHo and Arlo NoMad offer 4-star accommodations in New York City.', 4),
  (5, 'The Dominick Hotel', 'The only Five-Diamond property in NYC SoHo neighborhood. With 391 spacious rooms and suites with views of Manhattan and the Hudson River.', 5);

INSERT INTO comments (id, body, topic_id, user_id) VALUES
  (1, 'I love Four Seasons!', 1, 1),
  (2, 'I need Points!', 2, 2),
  (3, 'Book Direct for points.', 3, 3),
  (4, 'Arlo Nomad is awesome', 4, 4),
  (5, 'Amazing Hotel', 5, 5),
  (6, 'I am going to visit there soon!', 1, 2),
  (7, 'Using all the points to checkout Vietnam.', 2, 3),
  (8, 'Did you see the new ad? It is pretty amazing.', 3, 4),
  (9, 'I visited this hotel and what a great service...', 4, 5),
  (10, 'It used to be the Trump Hotel... Just saying.', 5, 1),
  (11, 'Testing.', 1, 5);


ALTER SEQUENCE users_id_seq RESTART WITH 6;
ALTER SEQUENCE topics_id_seq RESTART WITH 6;
ALTER SEQUENCE comments_id_seq RESTART WITH 12;

