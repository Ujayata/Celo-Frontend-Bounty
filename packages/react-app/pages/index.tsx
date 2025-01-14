// This is the main page of the app
import RoomList from "@/components/RoomList";
import AddRoomModal from "@/components/modal/AddRoomModal";

// Export the Home component
export default function Home() {
  return (
    <div className="w-full">
      <AddRoomModal />
      <RoomList />
    </div>
  );
}
