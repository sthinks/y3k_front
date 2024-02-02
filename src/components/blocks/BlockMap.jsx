// react
import React from 'react';

export default function BlockMap() {
    return (
        <div className="block-map block">
            <div className="block-map__body">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.0328253265297!2d29.09352491570679!3d41.09012942233228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacbca50da40b7%3A0x1d0efe9cea6f6572!2sSmart%20Plaza!5e0!3m2!1str!2str!4v1652885651288!5m2!1str!2str"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                />
            </div>
        </div>
    );
}
