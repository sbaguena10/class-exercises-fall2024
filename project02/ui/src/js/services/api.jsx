const rootURL = "http://localhost:8000";

// React Task 1:
export async function fetchUser(username) {
    // replace this code with functionality that actually
    // queries that correct endpoint:
    const response = await fetch(`/api/users/${username}`);

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }
    const userData = await response.json();
    return userData;
}

// React Task 3:
export async function fetchCourses(options = {}) {
    let baseURL = `${rootURL}/api/courses?`;
    const queryParams = [];

    if (options.department) {
        queryParams.push(`department=${options.department}`);
    }
    if (options.instructor) {
        queryParams.push(`instructor=${options.instructor}`);
    }
    if (options.hours) {
        queryParams.push(`hours=${options.hours}`);
    }
    if (options.title) {
        queryParams.push(`title=${options.title}`);
    }

    if (queryParams.length > 0) {
        baseURL += queryParams.join("&");
    }

    console.log(baseURL);

    const response = await fetch(baseURL);
    if (!response.ok) {
        throw new Error("Failed to fetch courses");
    }

    const courses = await response.json();
    console.log(courses);
    return courses;
}

export async function fetchSchedule(username) {
    try {
        const response = await fetch(`${rootURL}/api/schedules/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch schedule for ${username}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching schedule:", error);
        throw error;
    }
}

export async function deleteCourseFromSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses/${crn}`;

    try {
        const response = await fetch(url, { method: "DELETE" });
        if (!response.ok) {
            throw new Error(`Failed to delete course ${crn}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error deleting course:", error);
        throw error;
    }
}

export async function addCourseToSchedule(schedule, crn) {
    const url = `${rootURL}/api/schedules/${schedule.id}/courses`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ crn }),
        });

        if (!response.ok) {
            throw new Error(`Failed to add course ${crn}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error adding the course:", error);
        throw error;
    }
}
