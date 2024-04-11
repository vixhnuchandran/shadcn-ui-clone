import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AlbumArtwork } from "@/components/Music/AlbumArtwork"
import { Menu } from "@/components/Music/Menu"
import { PodcastEmptyPlaceholder } from "@/components/Music/PodcastPlaceholder"
import { Sidebar } from "@/components/Music/Sidebar"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { playlists } from "./data/playlists"

interface MusicProps {
    viewPort?: string
}

const Music: React.FC<MusicProps> = ({ viewPort }) => {
    return (
        <>
            <div className="md:relative text-left">
                <Menu />
                <div className="border-t">
                    <div className="bg-background">
                        <div className="grid lg:grid-cols-5">
                            <Sidebar
                                playlists={playlists}
                                className="hidden lg:block"
                            />

                            <div className="col-span-3 lg:col-span-4 lg:border-l lg:block">
                                <div className=" px-4 py-6 lg:px-8">
                                    <Tabs
                                        defaultValue="music"
                                        className=" space-y-6"
                                    >
                                        <div className="justify-between flex items-center">
                                            <TabsList>
                                                <TabsTrigger value="music">
                                                    Music
                                                </TabsTrigger>
                                                <TabsTrigger value="podcasts">
                                                    Podcasts
                                                </TabsTrigger>
                                                <TabsTrigger
                                                    value="live"
                                                    disabled
                                                >
                                                    Live
                                                </TabsTrigger>
                                            </TabsList>
                                            <div className=" mr-4">
                                                <Button>
                                                    <PlusCircledIcon className=" lg:mr-2 h-4 w-4" />
                                                    <span
                                                        className={
                                                            viewPort ===
                                                            "mobile"
                                                                ? "hidden"
                                                                : ""
                                                        }
                                                    >
                                                        Add music
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>

                                        <TabsContent
                                            value="music"
                                            className="border-none p-0 outline-none"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <h2 className="text-2xl font-semibold tracking-tight">
                                                        Listen Now
                                                    </h2>
                                                    <p className="text-sm text-muted-foreground">
                                                        Top picks for you.
                                                        Updated daily.
                                                    </p>
                                                </div>
                                            </div>
                                            <Separator className="my-4" />
                                            <div className="relative">
                                                <ScrollArea className="min-w-[300px]">
                                                    <div className="flex space-x-4 pb-4">
                                                        {listenNowAlbums.map(
                                                            album => (
                                                                <AlbumArtwork
                                                                    key={
                                                                        album.name
                                                                    }
                                                                    album={
                                                                        album
                                                                    }
                                                                    className={
                                                                        viewPort ===
                                                                        "mobile"
                                                                            ? "w-[80px]"
                                                                            : "w-[250px]"
                                                                    }
                                                                    aspectRatio="portrait"
                                                                    width={250}
                                                                    height={330}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                    <ScrollBar orientation="horizontal" />
                                                </ScrollArea>
                                            </div>
                                            <div className="mt-6 space-y-1">
                                                <h2 className="text-2xl font-semibold tracking-tight">
                                                    Made for You
                                                </h2>
                                                <p className="text-sm text-muted-foreground">
                                                    Your personal playlists.
                                                    Updated daily.
                                                </p>
                                            </div>
                                            <Separator className="my-4" />
                                            <div className="relative">
                                                <ScrollArea>
                                                    <div className="flex space-x-4 pb-4">
                                                        {madeForYouAlbums.map(
                                                            album => (
                                                                <AlbumArtwork
                                                                    key={
                                                                        album.name
                                                                    }
                                                                    album={
                                                                        album
                                                                    }
                                                                    className={
                                                                        viewPort ===
                                                                        "mobile"
                                                                            ? "w-[80px]"
                                                                            : "w-[150px]"
                                                                    }
                                                                    aspectRatio="square"
                                                                    width={150}
                                                                    height={150}
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                    <ScrollBar orientation="horizontal" />
                                                </ScrollArea>
                                            </div>
                                        </TabsContent>

                                        <TabsContent
                                            value="podcasts"
                                            className="h-full items-center flex-col border-none p-0 data-[state=active]:flex"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <h2 className="text-2xl font-semibold tracking-tight">
                                                        New Episodes
                                                    </h2>
                                                    <p className="text-sm text-muted-foreground">
                                                        Your favorite podcasts.
                                                        Updated daily.
                                                    </p>
                                                </div>
                                            </div>
                                            <Separator className="my-4" />
                                            <PodcastEmptyPlaceholder />
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Music
