import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const ManageBooking = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

function Main() {
    // Simulating the logged-in owner (In real-world, fetch from authentication)
    const loggedInOwnerId = "OWN123";  // This ID should be dynamically fetched for each owner

    const [bookings, setBookings] = useState([
        {
            bookingId: "BKG001",
            userId: "USR101",
            ownerId: "OWN123", // Same owner ID for all bookings on this page
            propertyId: "PRP001",
            name: "Rahul Sharma",
            property: "3BHK Apartment, Mumbai",
            startDate: "2024-04-15",
            endDate: "2024-04-20",
            status: "Pending"
        },
        {
            bookingId: "BKG002",
            userId: "USR102",
            ownerId: "OWN123",
            propertyId: "PRP002",
            name: "Priya Verma",
            property: "Villa, Bangalore",
            startDate: "2024-04-18",
            endDate: "2024-04-25",
            status: "Confirmed"
        },
        {
            bookingId: "BKG003",
            userId: "USR103",
            ownerId: "OWN123",
            propertyId: "PRP003",
            name: "Amit Patel",
            property: "Office Space, Ahmedabad",
            startDate: "2024-04-20",
            endDate: "2024-04-28",
            status: "Pending"
        }
    ]);

    const handleStatusChange = (bookingId, newStatus) => {
        setBookings(
            bookings.map((booking) =>
                booking.bookingId === bookingId ? { ...booking, status: newStatus } : booking
            )
        );
    };

    return (
        <div className="container mt-5" style={{ minHeight: "90vh", marginBottom: "70px" }}>
            <h2 className="text-center mb-4">Manage Property Bookings</h2>

            <div className="table-responsive">
                <table className="table table-bordered table-hover text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Booking ID</th>
                            <th>User ID</th>
                            <th>Property ID</th>
                            <th>User Name</th>
                            <th>Property</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length === 0 ? (
                            <tr>
                                <td colSpan="10" className="text-center">No bookings found.</td>
                            </tr>
                        ) : (
                            bookings.map((booking, index) => (
                                <tr key={booking.bookingId}>
                                    <td>{index + 1}</td>
                                    <td>{booking.bookingId}</td>
                                    <td>{booking.userId}</td>
                                    <td>{booking.propertyId}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.property}</td>
                                    <td>{booking.startDate}</td>
                                    <td>{booking.endDate}</td>
                                    <td>
                                        <span className={`badge ${booking.status === "Confirmed" ? "badge-success" : booking.status === "Canceled" ? "badge-danger" : "badge-warning"}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td>
                                        {booking.status === "Pending" && (
                                            <>
                                                <button className="btn btn-success btn-sm me-2" onClick={() => handleStatusChange(booking.bookingId, "Confirmed")}>
                                                    Confirm
                                                </button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleStatusChange(booking.bookingId, "Canceled")}>
                                                    Cancel
                                                </button>
                                            </>
                                        )}
                                        {booking.status !== "Pending" && <span className="text-muted">Action Taken</span>}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ManageBooking;
