INSERT INTO public.makers (id, name, src)
VALUES
  (1, 'MY PROTEIN', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg'),
  (2, 'DNS', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg'),
  (3, 'ZAVAS', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg');


INSERT INTO public.proteins (name, flavor, price, capacity, src, maker_id)
VALUES
  ('Impact ホエイ プロテイン', 'いちご', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('Impact ホエイ プロテイン', 'チョコレート', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('Impact ホエイ プロテイン', 'バナナ', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('Impact ホエイ プロテイン', 'バニラ', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('Impact ホエイ プロテイン', '抹茶', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('Impact ホエイ プロテイン', 'ピーチ', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('Impact ホエイ プロテイン', 'オレンジ', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('Impact ホエイ プロテイン', '北海道ミルク', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 1),
  ('DNS', 'DNSプロテイン', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 2),
  ('ZAVAS', 'ZAVASプロテイン', '2,650', '1kg', 'https://static.thcdn.com/images/large/original//productimg/1600/1600/10530943-1504726884876366.jpg', 3);