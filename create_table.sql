CREATE TABLE user (
    [ID]      INT           NOT NULL,
    [Name]    NVARCHAR (50) NOT NULL,
    [Emotion] INT           NOT NULL,
    CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED ([ID] ASC)
);

