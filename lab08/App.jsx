import React, { useState } from "react";
import { Form, Input, Button, InputNumber, Carousel } from "antd";

export default function App() {
    const [tracks, setTracks] = useState([]); 

    
    const fetchData = async (searchTerm, limit) => {
        const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";
        const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTracks(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    
    const onFinish = (values) => {
        const { searchTerm, limit } = values;
        fetchData(searchTerm, limit);
    };

    
    const trackToIframe = (track) => (
        <div key={track.id} style={{ textAlign: "center" }}>
            <iframe
                src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <h3>{track.name}</h3>
        </div>
    );

    return (
        <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
            <h1 style={{ textAlign: "center" }}>Spotify Track Search</h1>
            {/* Form */}
            <Form
                layout="vertical"
                onFinish={onFinish}
                style={{ marginBottom: "20px", maxWidth: "600px", margin: "auto" }}
            >
                <Form.Item
                    label="Search Term"
                    name="searchTerm"
                    rules={[{ required: true, message: "Please input a search term!" }]}
                >
                    <Input placeholder="e.g., Beyonce" />
                </Form.Item>
                <Form.Item
                    label="Number of Songs (Max 20)"
                    name="limit"
                    initialValue={5}
                    rules={[
                        { required: true, message: "Please input the number of songs!" },
                        { type: "number", min: 1, max: 20, message: "Number must be between 1 and 20!" },
                    ]}
                >
                    <InputNumber min={1} max={20} style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Search
                    </Button>
                </Form.Item>
            </Form>

            {/* Carousel */}
            {tracks.length > 0 && (
                <Carousel dotPosition="top">
                    {tracks.map(trackToIframe)}
                </Carousel>
            )}
        </div>
    );
}
