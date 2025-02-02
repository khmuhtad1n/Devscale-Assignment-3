import { DataList } from "./components/data-list";
import { API_URL } from "./utils/constants";
import { AlertStock } from "./components/alert-stock";
import { UserProfile } from "./components/user-profile";

export default async function Pages() {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-6">
        <section>
          <UserProfile />
        </section>
        <section></section>
        <section className="mt-6">
          <DataList />
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-bold mb-4">
            Some Items Are Low on Stock!
          </h3>
          <AlertStock data={data} />
        </section>
      </div>
    </div>
  );
}
