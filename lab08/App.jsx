import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Carousel } from "antd";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [songLimit, setSongLimit] = useState(5); 
    const [tracks, setTracks] = useState([]);

    
    const fetchData = async () => {
        const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";
        const url = `${baseURL}?q=${searchTerm}&type=track&limit=${songLimit}`;
        try {
            const request = await fetch(url);
            const data = await request.json();
            console.log(data); 
            setTracks(data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    
    const trackToIframe = (track) => (
        <iframe
            key={track.id}
            src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ border: "none" }}
        />
    );

    return (
        <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
            <h1>Spotify Track Search</h1>

            {/* Ant Design Form */}
            <Form
                layout="vertical"
                onFinish={fetchData} 
            >
                <Form.Item
                    label="Search Term"
                    name="searchTerm"
                    rules={[{ required: true, message: "Please enter a search term!" }]}
                >
                    <Input
                        placeholder="e.g., Beyonce"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Number of Songs"
                    name="songLimit"
                    rules={[
                        { required: true, message: "Please enter a number!" },
                        { type: "number", min: 1, max: 20, message: "Number must be between 1 and 20!" },
                    ]}
                >
                    <InputNumber
                        min={1}
                        max={20}
                        defaultValue={5}
                        onChange={(value) => setSongLimit(value)}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>

            {/* Carousel for Tracks */}
            {tracks.length > 0 && (
                <Carousel dotPosition="top" style={{ marginTop: "20px" }}>
                    {tracks.map(trackToIframe)}
                </Carousel>
            )}
        </div>
    );
};

export default App;
