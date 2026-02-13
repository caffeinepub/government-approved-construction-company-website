import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactSubmission, UserRole } from '../backend';

export function useGetAllSubmissions() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['submissions'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetCallerUserRole() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserRole>({
    queryKey: ['currentUserRole'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserRole();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

