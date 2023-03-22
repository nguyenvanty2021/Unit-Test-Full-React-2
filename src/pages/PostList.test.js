import { render, screen } from "@testing-library/react";
import React from "react";
import PostList from "./PostList";
import { useQuery } from "react-query";
import { BrowserRouter } from "react-router-dom";
jest.mock("react-query");
describe("PostList", () => {
  it("When isLoading is true then loading text should be displayed", () => {
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });
    render(<PostList isDrawerOpen={false} closeDrawer={jest.fn()} />);
    const text = screen.queryByTestId("loading-text");
    expect(text).toHaveTextContent("Loading..");
  });
  it("When isLoading is false and data exists then render list of data", () => {
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        data: [
          {
            id: 1,
            title: "Dummy Title",
          },
          {
            id: 2,
            title: "Last Dummy Title",
          },
        ],
      },
    });
    render(
      <BrowserRouter>
        <PostList isDrawerOpen={false} closeDrawer={jest.fn()} />
      </BrowserRouter>
    );
    const data = screen.getAllByTestId("list-item").map((li) => li.textContent);
    console.log(data);
    expect(data).toEqual(["Dummy Title", "Last Dummy Title"]);
  });
});
