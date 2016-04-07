'use strict';

eventsApp.controller('EventController', EventController);

function EventController($scope) {
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquarters',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: 'img/angularjs-logo.png',
        sessions: [
            {
                name: 'Directives Masterclass',
                creatorName: 'Bob Jones',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this module, we learned about roller skates.',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'Bill Doe',
                duration: '3 hours',
                level: 'Intermediate',
                abstract: 'This is something not so hard.',
                upVoteCount: 0
            },
            {
                name: 'Well Behaved Controllers',
                creatorName: 'Pee Wee Herman',
                duration: '30 minutes',
                level: 'Easy',
                abstract: 'This is supposed to be fun.',
                upVoteCount: 0
            }
        ]
    }

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    }
    $scope.downVoteSession = function (session) {
        if (session.upVoteCount >= 1) {
            session.upVoteCount--;
        }
    }
}