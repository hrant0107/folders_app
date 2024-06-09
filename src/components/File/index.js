import { memo } from "react";

export const File = memo(({ name, mime }) => {
    return (
        <div className="file">
            {name} ({mime})
        </div>
    );
});


File.displayName = 'File';
