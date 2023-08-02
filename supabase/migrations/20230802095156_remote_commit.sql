alter table "public"."flavors" drop constraint "flavors_protein_id_fkey";

alter table "public"."facts" enable row level security;

alter table "public"."features" enable row level security;

alter table "public"."flavors" enable row level security;

alter table "public"."makers" enable row level security;

alter table "public"."nutrients" enable row level security;

alter table "public"."products" enable row level security;

alter table "public"."proteins" enable row level security;

alter table "public"."reviews" enable row level security;

alter table "public"."sellers" enable row level security;

alter table "public"."flavors" add constraint "flavors_protein_id_fkey" FOREIGN KEY (protein_id) REFERENCES proteins(id) not valid;

alter table "public"."flavors" validate constraint "flavors_protein_id_fkey";

create policy "Enable read access for all users"
on "public"."facts"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."features"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."flavors"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."makers"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."nutrients"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."proteins"
as permissive
for select
to public
using (true);


create policy "Enable insert for authenticated users only"
on "public"."reviews"
as permissive
for insert
to anon
with check (true);


create policy "Enable read access for all users"
on "public"."reviews"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."sellers"
as permissive
for select
to public
using (true);



