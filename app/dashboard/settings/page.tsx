import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/ui/loader";
import { deleteUser, getUser, updateUser } from "@/lib/actionsUsers";
import { PencilRuler, Trash2 } from "lucide-react";

export default async function SettingsPage() {
  const user = await getUser();

  return (
    <Card className="border border-accent rounded-md p-3 space-y-2">
      <h2 className="text-xl uppercase font-black font-mono">Settings</h2>
      <p className="text-sm text-muted-foreground">Your profile settings</p>

      <div className="w-6 bg-accent-foreground mx-1 h-[1px]"></div>

      <form action={updateUser}>
        <Input type="hidden" name="id" value={user?.id} />

        <Card>
          <CardHeader>
            <CardTitle>Global settings</CardTitle>
            <CardDescription>Edit your information then save</CardDescription>
          </CardHeader>
          <CardContent>
            <Avatar size="lg" className="mb-2">
              {user?.image ? (
                <AvatarImage
                  src={user.image}
                  alt={`${user.name} profil picture`}
                />
              ) : null}
              <AvatarFallback>
                {user?.name?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1 mb-2">
              <Label htmlFor="idUser">ID</Label>
              <Input
                type="text"
                id="idUser"
                name="idUser"
                defaultValue={user?.id ? user.id : ""}
                disabled
                className="bg-accent"
              />
            </div>
            <div className="space-y-1 mb-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                defaultValue={user?.name ? user.name : ""}
              />
            </div>
            <div className="space-y-1 mb-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                defaultValue={user?.email ? user.email : ""}
                disabled
                className="bg-accent"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="bg-orange-600 hover:bg-opacity-80 hover:bg-orange-600 transition-all text-white flex items-center gap-1"
            >
              {/* {loader ? <Loader className="mr-2" size={12} /> : "Update"} */}
              <PencilRuler size={16} /> Edit profile
            </Button>
          </CardFooter>
        </Card>
      </form>

      <form action={deleteUser}>
        {/* <Input type="hidden" name="id" value="" /> */}
        <Button
          variant={"destructive"}
          className="my-2 flex gap-1 items-center "
        >
          <Trash2 size={14} /> Delete your account
        </Button>
      </form>
    </Card>
  );
}
