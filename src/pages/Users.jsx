import React, { useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initUsers = useLoaderData();
  const [users, setUsers] = useState(initUsers);

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-achibhossengit-achib-hossens-projects.vercel.app/users/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setUsers(users.filter((user) => user._id != id));
            //   delete accoutn from firebase
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <p>{users.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Last Login</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            user?.photoURL
                              ? user.photoURL
                              : "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                          alt="User photo"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email ? user.email : "Not Found"}</td>
                <td>{user.lastSignInTime || "Not found"}</td>
                <th>
                  <button className="btn btn-xs">
                    <FaEye />
                  </button>
                  <button className="btn btn-xs">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-xs"
                  >
                    <FiDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
