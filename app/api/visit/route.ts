import { NextResponse } from "next/server";
import { database } from "@/firebase";
import { ref, get, set } from "firebase/database";

export async function GET() {
  console.log("API called");
  try {
    const visitRef = ref(database, "visitCount");
    console.log("Fetching visit count...");
    const snapshot = await get(visitRef);
    console.log("Snapshot fetched:", snapshot.exists() ? snapshot.val() : "No data");

    const currentCount = snapshot.exists() ? snapshot.val() : 0;
    const newCount = currentCount + 1;
    console.log("New count:", newCount);

    await set(visitRef, newCount);
    console.log("Count updated successfully");

    return NextResponse.json({ visitCount: newCount });
  } catch (error) {
    console.error("Error fetching or updating count:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
