alter table "public"."facts" disable row level security;

alter table "public"."nutrients" drop column "quentity";

alter table "public"."nutrients" add column "quantity" text not null default ''::text;

alter table "public"."nutrients" disable row level security;


